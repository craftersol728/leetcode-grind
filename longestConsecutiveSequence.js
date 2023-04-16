/*128. Longest Consecutive Sequence do not give me the answer. 
set a var LongestConsecutiveSequence = []
im thinking i def need to sort the array 1st during a loop 

and then to see if the next int is current int+1 if so the Longest Consecutive Sequence counter increments by1

once it reaches a number thats not part of the sequence, saves the sequence in the Longest Consecutive Sequence var and resets and starts back from 0 and once looped through the array, take the biggest number from that obejct and return it*/


var longestConsecutive = function(nums) {
    let longest_consecutive_sequence = 1;

    if (nums.length === 0) {
        longest_consecutive_sequence = 0
        return longest_consecutive_sequence;
    }
    nums.sort((a, b) => a - b);

    let current_sequence_length = 1;

    for (i=1;i<nums.length;i++){
        if (nums[i] == nums[i-1]+1){
            current_sequence_length++;
        } else if (nums[i] === nums[i-1]){
            continue;
        } else {
            longest_consecutive_sequence = Math.max(longest_consecutive_sequence, current_sequence_length)
            current_sequence_length =1;
        }
     
    }
    longest_consecutive_sequence = Math.max(longest_consecutive_sequence, current_sequence_length);   
    return longest_consecutive_sequence;
};


/*  hash set solution

var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) { // Check if this is the first element of a sequence
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

*/