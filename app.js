import { fileURLToPath } from 'url';
import { dirname } from 'path';
import createError from 'http-errors';
import express, { json, urlencoded, static as staticFile } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import { connectLibraryDB } from './database/dispatcherdb.js';
import passport from "passport";
import session from "express-session";
import { userRouter } from './routes/user.js';
import { User } from './models/user.js';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
//import compression from 'compression';
//import helmet from 'helmet'
//import RateLimit from 'express-rate-limit'

connectLibraryDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(staticFile(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      console.log('try')
      const user = await User.findOne({ username: username });
      const match = await bcrypt.compare(password, user.password);
      if (!user) {
        console.log('uncorrect username')
        return done(null, false, { message: "Incorrect username" });
      };
      if (!match) {
        console.log('Incorrect password')
        return done(null, false, { message: "Incorrect password" });
      };
      console.log('Welcome')
      return done(null, user);
    } catch (err) {
      console.log('catch')
      return done(err);
    };
  })
);

passport.serializeUser((user, done) => {
  console.log('wow2')
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log('wow3')
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  };
});

export default app;