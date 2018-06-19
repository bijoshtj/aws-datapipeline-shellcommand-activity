
var args = process.argv;

if (args.length < 3) {
  console.log("No input args..");
} else {
  args.forEach(curr => {
    console.log('curr input param is: ', curr);
  });
}
