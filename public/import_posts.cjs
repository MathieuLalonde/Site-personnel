// Adapted from:
// https://github.com/willjw3/react-markdown-blog/blob/master/public/main.js
// (https://www.youtube.com/playlist?list=PLASldBPN_pkBfRXOkBOaeCJYzCnISw5-Z)

const blogSourceFolder = "../src/blog_content";
const blogOutputFile = "src/posts.json";
// const postSourceFolder = "../src/page_content";
// const postOutputFile = "src/pages.json";

const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, blogSourceFolder);
// const dirPathPages = path.join(__dirname, postSourceFolder);
let postlist = [];
// let pagelist = [];

// Import blog posts to .json file
const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }

    // Replaced forEach with a for loop
    // to force files to be processed sequentially -mjl
    let i = 0;
    for (const file of files) {
      let obj = {};
      let post;

      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {

        const getMetadataIndices = (acc, elem, j) => {
          if (/^---/.test(elem)) {
            acc.push(j);
          }
          return acc;
        };

        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };

        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };

        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        const postDate = new Date(metadata.postDate); // TODO: verifier son utilisation vs la chaine texte...
        const categories = metadata.categories.trim().toLowerCase().split(", ");
        const timestamp = postDate.getTime() / 1000;
    
        post = {
          id: timestamp,
          title: metadata.title ? metadata.title : "No title given",
          author: metadata.author ? metadata.author : "No author given",
          abstract: metadata.abstract ? metadata.abstract : "",
          postDate: metadata.postDate ? metadata.postDate : "No date given",
          categories: metadata.categories ? categories : ["No label given"],
          content: content ? content : "No content given",
        };

        if (metadata.postStatus.toLowerCase() != "draft" &&
            timestamp) {
          postlist.push(post);
        }

        if (i === files.length - 1) {
          const sortedList = postlist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });

          let data = JSON.stringify(sortedList);
          fs.writeFileSync(blogOutputFile, data);
          
          // console.log(sortedList);
          console.log("\n" + files.length + " files processed");
          console.log(sortedList.length + " entries saved \n");
        }
        
        i++;
      });
    };
  });
  return;
};

// // Import static content
// const getPages = () => {
//   fs.readdir(dirPathPages, (err, files) => {

//     if (err) {
//       return console.log("Failed to list contents of directory: " + err);
//     }

//     files.forEach((file, i) => {
//       let page;
//       fs.readFile(`${dirPathPages}/${file}`, "utf8", (err, contents) => {
//         page = {
//           content: contents,
//         };
//         pagelist.push(page);
//         let data = JSON.stringify(pagelist);
//         fs.writeFileSync(postOutputFile, data);
//       });
//     });

//   });
//   return;
// };

getPosts();
// getPages();
