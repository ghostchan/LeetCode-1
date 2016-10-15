/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) return
  if (root.right) {
    flatten(root.right)
  }
  if (!root.left) return
  flatten(root.left)
  r = root.left
  while (r.right) {
    r = r.right
  }
  r.right = root.right
  root.right = root.left
  root.left = null
};
