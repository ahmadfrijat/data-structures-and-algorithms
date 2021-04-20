'use strict';

function FizzBuzzTree(tree) {
    let _traverse = (node) => {
        if (node.value) {
            if (node.value % 3 === 0 && node.value % 5 === 0){
                node.value = 'FizzBuzz';

            }else if (node.value % 5 === 0){
             node.value = 'Buzz';

            }else if (node.value % 3 === 0){
                node.value = 'Fizz';

            }else{
            //turn the number into a String
             node.value = `${node.value}`;
            }
        }
        if (node.left){
            _traverse(node.left);
        }
        if (node.right){
            _traverse(node.right);
        }
    };

    _traverse(tree.root);
    return tree;
}



module.exports = FizzBuzzTree;
