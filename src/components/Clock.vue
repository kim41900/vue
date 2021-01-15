<template>
  <div>
    <div>
      <span id="postTestMin">00</span
      ><!-- 분 -->
      <span>:</span>
      <span id="postTestSec">00</span>
    </div>
    <div>
      <span id="recordTest">00</span>
      <!--중간 기록할 리스트-->
    </div>
    <div>
      <v-btn @click="countTime">Start</v-btn>
      <!--시작/재시작/기록 버튼-->
    </div>
    <!-- <li v-for="item in light" :key="index">
      <img src="ltem.images" />
    </li> -->
  </div>
</template>
<script>
var stTime=0
var timerStart
var min
var sec
var stTime=0
var timerStart
var min
var sec

export default {
data(){
  return{
    
  }
},
   methods: {
  countTime() {
    if (!stTime) {
                stTime = Date.now()
            }
     timerStart = setInterval(function () {
                /*   var nowTime = new Date().getTime()  //1ms당 한 번씩 현재시간 timestamp를 불러와 nowTime에 저장
                 var newTime = new Date(nowTime - stTime) */ //(nowTime - stTime)을 new Date()에 넣는다
                var nowTime = new Date(Date.now() - stTime)

                var min = nowTime.getMinutes() //분
                var sec = nowTime.getSeconds() //초
                if (Date.now() - stTime % 3 == 0) {
                    on1 = !on1
                }
                if (Date.now() - stTime % 7 == 0) {
                    on2 = !on2
                }
                if (Date.now() - stTime % 10 == 0) {
                    on3 = !on3
                }

                if (on1 && on2 && on3) {
                    count++
                    document.getElementById('recordTest').innerText = addZero(count);
                }

                render(on1, on2, on3);

                printTime(min, sec);

                if (min == 3 && sec == 0) {
                    clearInterval(timerStart);
                }
            }, 1000)
        },
        addZero(num) {
            return (num < 10 ? '0' + num : '' + num)
        },
        printTime(min, sec) {
            document.getElementById('postTestMin').innerText = addZero(min)
            document.getElementById('postTestSec').innerText = addZero(sec)
        },
        render(on1, on2, on3) {
            if (on1) {
                document.getElementById("light1").src = "light_on.png"
            }
            else {
                document.getElementById("light1").src = "light_off.png"
            }

            if (on2) {
                document.getElementById("light2").src = "light_on.png"
            }
            else {
                document.getElementById("light2").src = "light_off.png"
            }

            if (on3) {
                document.getElementById("light3").src = "light_on.png"
            }
            else {
                document.getElementById("light3").src = "light_off.png"
            }


        }

   }
   </script>