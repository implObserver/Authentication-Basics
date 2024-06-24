import express from "express";
import { connectLibraryDB } from "../database/dispatcherdb.js";
import { useGlobalSetters } from "./set/index.js";
import { useGlobalMiddlewares } from "./use/index.js";

export const app = express();

connectLibraryDB();
useGlobalSetters();
useGlobalMiddlewares();