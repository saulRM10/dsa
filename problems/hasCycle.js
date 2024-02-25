/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var visited = []; 
    if (head === null) return false; 
    while( head?.next !== null){
        if( visited.includes(head?.val)){
            console.log(visited.length);
            return true
        } else visited.push(head?.val);
    } return false;
};

module.exports = { hasCycle }; 