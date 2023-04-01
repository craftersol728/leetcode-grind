/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //Create a dictionary (hashmap) to store the frequency of each integer in the input array.
      let dictionary = {};
    //Loop through the input array and update the frequency count in the dictionary.
      for (let i = 0; i < nums.length; i++){
        let num = nums[i];
        if (dictionary.hasOwnProperty(num)){
            dictionary[num]++;
        } else {
            dictionary[num]= 1;
        }

     
      }
   //Use a min-heap (priority queue) to keep track of the k most frequent elements.
      let minHeap = [];
      
      for(let key in dictionary){
        minHeap.push([parseInt(key),dictionary[key]]);

        //if the heap size exceeds k , remove the smallest(least frequesnt element) from the min Heap
        if(minHeap.length> k) {
            minHeap.sort ((a,b)=>a[1]-b[1]);
            minHeap.shift()
        }
      }
      return minHeap.map(entry => entry[0]);
};