const fs = require('fs');
const path = require('path');

// 获取当前文件夹路径 
const folderPath = './';
const  list = [];
// 递归读取文件
function traverse(currentPath) {

    // 读取当前路径下的文件和文件夹
    fs.readdir(currentPath, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }

        files.forEach(file => {
            if (file!= '.git') {
                // 拼接完整路径 
                const filePath = path.join(currentPath, file);

                // 递归读取子文件夹  
                if (fs.statSync(filePath).isDirectory()) {
                    traverse(filePath);
                } else {
                    // 输出文件路径
                    fs.appendFileSync('list.txt', '"/'+filePath+'"\n');
                }
            }
        });

    });

}

// 开始递归遍历根目录
traverse(folderPath);

