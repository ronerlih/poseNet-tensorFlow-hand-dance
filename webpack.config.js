module: {
   loaders: [
     { test: /aws-sdk/, loaders: ["transform?brfs"]},
     { test: /\.json$/, loaders: ['json']},
   ]
 },
 output: {
   library: 'LibraryName',
   libraryTarget: 'umd'
 },
 resolve: {
   extensions: ['', '.js']
 }