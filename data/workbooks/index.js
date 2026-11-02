// data/workbooks/index.js
// Registry of every workbook (subtopic) file, keyed by its slug — the same slug each
// file carries and that WorkbookView logs as the event container. Add a line per workbook.
//
// Check the import paths against your data/ folder; only the first two are confirmed.

import equivalentTo from "@/data/equivalent-to";
import evaluatingAFunction from "@/data/evaluating-a-function";
import simpleGraphing from "@/data/simple-graphing";
import yIntercept from "@/data/y-intercept";
import vertex from "@/data/vertex";
import xIntercept from "@/data/x-intercept";
import discriminantTheory from "@/data/discriminant-theory";

const workbooks = {
  "simple-equivalent-to": equivalentTo,
  "evaluating-a-function": evaluatingAFunction,
  "simple-graphing": simpleGraphing,
  "y-intercept": yIntercept,
  "vertex": vertex,
  "x-intercept": xIntercept,
  "discriminant-theory": discriminantTheory,
};

export default workbooks;