// 997. Find the Town Judge

// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

 

// Example 1:

// Input: n = 2, trust = [[1,2]]
// Output: 2
// Example 2:

// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:

// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1
 

// Constraints:

// 1 <= n <= 1000
// 0 <= trust.length <= 104
// trust[i].length == 2
// All the pairs of trust are unique.
// ai != bi
// 1 <= ai, bi <= n


// testcases:
// n
// trust
// answer
// 2
// [[1,2]]
// 2

// 3
// [[1,3],[2,3]]
// 2

// 3
// [[1,3],[2,3],[3,1]]
// -1

// 3
// [[1,2],[2,1],[2,3],[3,2],[3,1]]
// -1

// 1
// []
// 1



/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n == 1) return 1;
    if (n < 1 || trust.length <= 0) return -1;
  
    // console.log(`trust [${trust}]`);
      const trusted = {};
      const untrusted = {};
      for(let i in trust){
        let relationship = trust[i];
        // console.log(`\nl${i} relationship: \t\t\t\t[${relationship}]`);
  
        let person_a = relationship[0];
        let person_b = relationship[1];
  
        trusted[person_b] = trusted[person_b] || [];
        trusted[person_b].push(person_a);
  
        untrusted[person_a] = 1;
  
        delete trusted[person_a];
  
        if (untrusted[person_b]) {
          delete trusted[person_b];
        }
  
        // console.log(`l${i} person a: \t\t\t\t${person_a}`);
        // console.log(`l${i} person b: \t\t\t\t${person_b}`);
  
        // console.log(Object.keys(trusted));
        // console.log(Object.keys(untrusted));
        // console.log(`l${i} trust_arr[0]: \t\t\t\t${trust_arr[0]}`);
        // console.log(`l${i} trust_arr: \t\t\t\t[${trust_arr}]\n`);
        // if (person_a == trust_arr[0] || trusted[person_a]){
        //   trust_arr.pop();
        // } else if (person_b != trust_arr[0]){ 
        //   trust_arr.push(person_b); }
  
  
      }
      
      // console.log(`trust_arr at end: [${trust_arr}]`);
      // console.log(trusted);
      // console.log(Object.keys(trusted));
      const the_str_judge = Object.keys(trusted)[0];
      const the_judge = parseInt(the_str_judge);
      return trusted[the_judge]?.length == n - 1 ? the_judge : -1;
  };



//   cleaned submission

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n == 1) return 1;
    if (n < 1 || trust.length <= 0) return -1;
  
    const trusted = {};
    const untrusted = {};
    for(let i in trust){
        let relationship = trust[i];

        let person_a = relationship[0];
        let person_b = relationship[1];

        trusted[person_b] = trusted[person_b] || [];
        trusted[person_b].push(person_a);

        untrusted[person_a] = 1;

        delete trusted[person_a];

        if (untrusted[person_b]) {
            delete trusted[person_b];
        }
    }

      const the_str_judge = Object.keys(trusted)[0];
      const the_judge = parseInt(the_str_judge);
      return trusted[the_judge]?.length == n - 1 ? the_judge : -1;
  };


//   supposed graph question but I didn't use a graph. Not sure how to do it that way.
//   will need to figure that out


// Better solution from the submitted solutions
// uses Map()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// Map is object but better

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  
    if(n === 1) return 1;
    // n is number of ppl in the town, start at 1
    let trustMap = new Map()
    let trustIssue = new Array(n+1).fill(1)

    for(let x =0; x<trust.length;x++){
        const [ a ,b] = trust[x]
        trustIssue[a] = 0;
        trustMap.set(b, (trustMap.get(b) || 0) + 1 )
    }
    
    for ( let [key,value] of trustMap){
        if(value === n-1){
            if(trustIssue[key] === 1){
                return key
            }
        }
    }
    return -1
    
};

// This solution is even faster
//  it uses a plus 1 and minus 1 approach. very interesting
const findJudge = (N, trust) => {
    let trustCount = new Array(N + 1).fill(0)
    for (let i = 0; i < trust.length; i++) {
        trustCount[trust[i][0]]--;
        trustCount[trust[i][1]]++;
    }
    for (let i = 1; i <= N; i++) {
        if (trustCount[i] === N - 1) {
            return i;
        }
    }
    return -1;
}

