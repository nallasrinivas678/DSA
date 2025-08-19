// [-2, 1, -3, 4, -1, 2, 1, -5, 4];

//brute force approach
const maxSubArray = (arr) => {

    let maxSum = -Infinity;
   
    for(i = 0; i < arr.length; i++){
        let currentSum = 0;
        
        for(j = i; j < arr.length; j++){
            currentSum += arr[j]
            maxSum = Math.max(currentSum, maxSum);
        }
    }
    return maxSum;
}

//Kadanes
function maxSubArrayKadane(arr){
    let maxSofar = arr[0];
    let maxEndingHere = arr[0];

    for(let i=1; i < arr.length; i++){
        maxEndingHere = Math.max(arr[i], maxEndingHere+arr[i]);
        maxSofar = Math.max(maxEndingHere, maxSofar);
    }

    return maxSofar;
}

maxSubArrayKadane( [-2, 1, -3, 4, -1, 2, 1, -5, 4]);

//Explanation
Start at -2:
current = -2, best = -2
subarray = [-2]

(start=0, best=[0,0]) (indices)

At 1:
max(1, -2+1) = 1
⭐ Reset here → new subarray starts at index 1

current=1, best=1
subarray = [1]

(start=1, best=[1,1])
At -3:
max(-3, 1-3) = -2

current=-2, best still = 1
No reset, but we’re in negative territory
subarray = [1,-3] (but not good)

At 4:
max(4, -2+4) = 4
⭐ Reset → new subarray starts at index 3

current=4, best=4
subarray = [4]
(start=3, best=[3,3])

At -1:
max(-1, 4-1) = 3
Keep adding → subarray = [4,-1]
current=3, best=4

At 2:
max(2, 3+2) = 5
Extend → subarray = [4,-1,2]
current=5, best=5
(best now [3,5])

At 1:
max(1, 5+1) = 6
Extend → subarray = [4,-1,2,1]
current=6, best=6 ✅
(best now [3,6])

At -5:
max(-5, 6-5) = 1
No reset (still better to carry 1)
subarray is kind of “broken” → [4,-1,2,1,-5]
current=1, best=6

At 4:
max(4, 1+4) = 5
Extend → subarray = [4,-1,2,1,-5,4] but effective part is [4]
current=5, best=6

Final Answer:
Max sum = 6
Best subarray = [4, -1, 2, 1]

Start=3, End=6
