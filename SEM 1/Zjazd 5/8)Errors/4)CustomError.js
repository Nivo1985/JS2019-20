try {
  throw new Error("Custom application error");
} catch (error) {
  console.log("error: ", error);
} finally {
  console.log("finally block reasech");
}
console.log("done");
