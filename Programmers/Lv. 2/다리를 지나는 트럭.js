const truckWeightSum = (arr) => {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
} 

function solution(bridge_length, weight, truck_weights) {
    //다리에 올라갈 수 있는 트럭 수 bridge_length, 
    //다리가 견딜 수 있는 무게 weight, 
    //트럭 별 무게 truck_weights
    let answer = bridge_length;

    while(truck_weights.length !== 0) {
        let bridge = [];
        bridge.push(truck_weights.shift());
        answer++;

        while ((truckWeightSum(bridge) + truck_weights[0] <= weight) && (bridge.length < bridge_length)) {
            bridge.push(truck_weights.shift());
            answer++;
        }

        if(bridge.length !== 1 && truck_weights.length !== 0) answer += bridge.length;
    }

    console.log(answer)
    return answer;
}

solution(2, 10, [7,4,5,6]) //8 = 2 + 4 + 2
solution(100, 100, [10]) //101 = 100 + 1
//solution(100, 100, [10,10,10,10,10,10,10,10,10,10]) //110 = 100 + 10