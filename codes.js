module.exports = {
    answers: [
        `import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    static int simpleArraySum(int[] ar) {
        return Arrays.stream(ar).sum();
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int arCount = Integer.parseInt(scanner.nextLine().trim());

        int[] ar = new int[arCount];

        String[] arItems = scanner.nextLine().split(" ");

        for (int arItr = 0; arItr < arCount; arItr++) {
            int arItem = Integer.parseInt(arItems[arItr].trim());
            ar[arItr] = arItem;
        }

        int result = simpleArraySum(ar);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();
    }
}
`,
`import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
     
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int a0 = in.nextInt();
        int a1 = in.nextInt();
        int a2 = in.nextInt();
        int b0 = in.nextInt();
        int b1 = in.nextInt();
        int b2 = in.nextInt();
        
        int aliceCount = 0;
        int bobCount = 0;
        
        if(a0 > b0){
            aliceCount++;
        }
        else if(a0 < b0){
            bobCount++;
        }
        if(a1 > b1){
            aliceCount++;
        }
        else if (a1 < b1){
            bobCount++;
        }
        if(a2 > b2){
            aliceCount++;
        }
        else if(a2 < b2) {
            bobCount++;
        }
        
        System.out.println(aliceCount + " " + bobCount);
    }
}
`,
`import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    static long aVeryBigSum(long[] ar) {
long sum=0;
for(int i=0;i<ar.length;i++)
{
sum = sum+ ar[i];
}
return sum;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int arCount = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        long[] ar = new long[arCount];

        String[] arItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < arCount; i++) {
            long arItem = Long.parseLong(arItems[i]);
            ar[i] = arItem;
        }

        long result = aVeryBigSum(ar);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
`,
`import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    public static int diagonalDifference(List<List<Integer>> arr) {
        int a = 0, b = 0;
        for(int i = 0; i < arr.size(); i++){
            for(int j = 0; j < arr.get(i).size(); j++){
                if(i == j){
                    a += arr.get(i).get(j);
                }
                if((i + j) == (arr.size() - 1)){
                    b += arr.get(i).get(j);
                }
            }
        }
        return (a > b) ? a - b : b - a;
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<List<Integer>> arr = new ArrayList<>();

        IntStream.range(0, n).forEach(i -> {
            try {
                arr.add(
                    Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                        .map(Integer::parseInt)
                        .collect(toList())
                );
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        int result = Result.diagonalDifference(arr);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
`,
`import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    static void plusMinus(int[] arr) {
        float p=0;
        float n=0;
        float z=0;
        for(int i=0;i<arr.length;i++){
            if(arr[i] == 0){
                z++;
            }
            else{
                if(arr[i] > 0){
                    p++;
                }
                else{
                    n++;
                }
            }
        }
        p/= arr.length;
        n/= arr.length;
        z/= arr.length;
        System.out.println(p);
        System.out.println(n);
        System.out.println(z);
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] arr = new int[n];

        String[] arrItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int arrItem = Integer.parseInt(arrItems[i]);
            arr[i] = arrItem;
        }

        plusMinus(arr);

        scanner.close();
    }
}
`,
`import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
    
        Scanner sc = new Scanner(System.in);
        int num  = Integer.parseInt(sc.nextLine());
        for(int j=0;j<num;j++){
            for(int i=1;i<=num;i++){
                System.out.print(i<num-j?" ":"#");
            }
            System.out.println("");
        }
        
    }
}
`,
`import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the miniMaxSum function below.
    static void miniMaxSum(int[] arr) {
        long sum = 0;
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        for(int x : arr){
            sum += x;
            if(x > max){
                max = x;
            }
            if(x < min){
                min = x;
            }
        }
        System.out.println((sum - max) + " " + (sum - min));
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int[] arr = new int[5];

        String[] arrItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < 5; i++) {
            int arrItem = Integer.parseInt(arrItems[i]);
            arr[i] = arrItem;
        }

        miniMaxSum(arr);

        scanner.close();
    }
}
`,
`import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    static int birthdayCakeCandles(int[] ar) {
        int max=ar[0];
        for(int i=1;i<ar.length;i++){
         if(max<ar[i]){
             max=ar[i];
         }   
        }
        int nb = 0;
        for(int j=0;j<ar.length;j++){
            if(ar[j]==max){
                nb++;
            }
        }
        return nb;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int arCount = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] ar = new int[arCount];

        String[] arItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < arCount; i++) {
            int arItem = Integer.parseInt(arItems[i]);
            ar[i] = arItem;
        }

        int result = birthdayCakeCandles(ar);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
`,
`import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    static String timeConversion(String s) {
     if(s.charAt(8)=='P'){

        String portion = s.substring(0,8);
        String[] times = portion.split(":");
        if(times[0].matches("12")){
            return times[0] + ":" + times[1] + ":" + times[2];
        }
        times[0] = String.valueOf(Integer.valueOf(times[0]) + 12);
        return times[0] + ":" + times[1] + ":" + times[2];
     }else{
         String portion = s.substring(0,8);
        String[] times = portion.split(":");
        if(times[0].matches("12")){
            times[0]= "00";
            return times[0] + ":" + times[1] + ":" + times[2];
        }
         return s.substring(0,8);
     }
    }

    private static final Scanner scan = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bw = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = scan.nextLine();

        String result = timeConversion(s);

        bw.write(result);
        bw.newLine();

        bw.close();
    }
}
`
    ]
}
