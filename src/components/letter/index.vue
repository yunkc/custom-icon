<script setup lang="ts">
//
</script>
<template>
    <div class="letter">
        <div class="text"></div>
    </div>
</template>

<style scoped lang="less">
.letter{
    position: relative;
    .text{
        position: absolute;
        left: 50%;
        top: 50%;
        font-size: 1em;
        &:before, &:after {
            position: absolute;
            opacity: 1;
            transform: translate(-50%, -50%);
            animation-duration: 39s;
            animation-timing-function: ease;
            animation-iteration-count: infinite;
            filter: blur(.25px);
        }
        &:before {
            content: "";
            animation-name: items-odd;
        }
        &:after {
            content: "";
            animation-name: items-even;
            animation-delay: 1.5s;
        }
    }
}
@keyframes items-odd {
    2.5641025641% {
        opacity: 1;
    }
    3.8461538462% {
        opacity: 1;
    }
    6.4102564103% {
        opacity: 0;
    }
    7.6923076923% {
        opacity: 0;
    }
    10.2564102564% {
        opacity: 1;
    }
    11.5384615385% {
        opacity: 1;
    }
    14.1025641026% {
        opacity: 0;
    }
    15.3846153846% {
        opacity: 0;
    }
    17.9487179487% {
        opacity: 1;
    }
    19.2307692308% {
        opacity: 1;
    }
    21.7948717949% {
        opacity: 0;
    }
    23.0769230769% {
        opacity: 0;
    }
    25.641025641% {
        opacity: 1;
    }
    26.9230769231% {
        opacity: 1;
    }
    29.4871794872% {
        opacity: 0;
    }
    30.7692307692% {
        opacity: 0;
    }
    33.3333333333% {
        opacity: 1;
    }
    34.6153846154% {
        opacity: 1;
    }
    37.1794871795% {
        opacity: 0;
    }
    38.4615384615% {
        opacity: 0;
    }
    41.0256410256% {
        opacity: 1;
    }
    42.3076923077% {
        opacity: 1;
    }
    44.8717948718% {
        opacity: 0;
    }
    46.1538461538% {
        opacity: 0;
    }
    48.7179487179% {
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    52.5641025641% {
        opacity: 0;
    }
    53.8461538462% {
        opacity: 0;
    }
    56.4102564103% {
        opacity: 1;
    }
    57.6923076923% {
        opacity: 1;
    }
    60.2564102564% {
        opacity: 0;
    }
    61.5384615385% {
        opacity: 0;
    }
    64.1025641026% {
        opacity: 1;
    }
    65.3846153846% {
        opacity: 1;
    }
    67.9487179487% {
        opacity: 0;
    }
    69.2307692308% {
        opacity: 0;
    }
    71.7948717949% {
        opacity: 1;
    }
    73.0769230769% {
        opacity: 1;
    }
    75.641025641% {
        opacity: 0;
    }
    76.9230769231% {
        opacity: 0;
    }
    79.4871794872% {
        opacity: 1;
    }
    80.7692307692% {
        opacity: 1;
    }
    83.3333333333% {
        opacity: 0;
    }
    84.6153846154% {
        opacity: 0;
    }
    87.1794871795% {
        opacity: 1;
    }
    88.4615384615% {
        opacity: 1;
    }
    91.0256410256% {
        opacity: 0;
    }
    92.3076923077% {
        opacity: 0;
    }
    94.8717948718% {
        opacity: 1;
    }
    96.1538461538% {
        opacity: 1;
    }
    98.7179487179% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
    0% {
        content: "A";
    }
    7.6922076923% {
        content: "A";
    }
    7.6923076923% {
        content: "C";
    }
    15.3845153846% {
        content: "C";
    }
    15.3846153846% {
        content: "E";
    }
    23.0768230769% {
        content: "E";
    }
    23.0769230769% {
        content: "G";
    }
    30.7691307692% {
        content: "G";
    }
    30.7692307692% {
        content: "I";
    }
    38.4614384615% {
        content: "I";
    }
    38.4615384615% {
        content: "K";
    }
    46.1537461538% {
        content: "K";
    }
    46.1538461538% {
        content: "M";
    }
    53.8460538462% {
        content: "M";
    }
    53.8461538462% {
        content: "O";
    }
    61.5383615385% {
        content: "O";
    }
    61.5384615385% {
        content: "Q";
    }
    69.2306692308% {
        content: "Q";
    }
    69.2307692308% {
        content: "S";
    }
    76.9229769231% {
        content: "S";
    }
    76.9230769231% {
        content: "U";
    }
    84.6152846154% {
        content: "U";
    }
    84.6153846154% {
        content: "W";
    }
    92.3075923077% {
        content: "W";
    }
    92.3076923077% {
        content: "Y";
    }
    99.9999% {
        content: "Y";
    }
}
@keyframes items-even {
    2.5641025641% {
        opacity: 1;
    }
    3.8461538462% {
        opacity: 1;
    }
    6.4102564103% {
        opacity: 0;
    }
    7.6923076923% {
        opacity: 0;
    }
    10.2564102564% {
        opacity: 1;
    }
    11.5384615385% {
        opacity: 1;
    }
    14.1025641026% {
        opacity: 0;
    }
    15.3846153846% {
        opacity: 0;
    }
    17.9487179487% {
        opacity: 1;
    }
    19.2307692308% {
        opacity: 1;
    }
    21.7948717949% {
        opacity: 0;
    }
    23.0769230769% {
        opacity: 0;
    }
    25.641025641% {
        opacity: 1;
    }
    26.9230769231% {
        opacity: 1;
    }
    29.4871794872% {
        opacity: 0;
    }
    30.7692307692% {
        opacity: 0;
    }
    33.3333333333% {
        opacity: 1;
    }
    34.6153846154% {
        opacity: 1;
    }
    37.1794871795% {
        opacity: 0;
    }
    38.4615384615% {
        opacity: 0;
    }
    41.0256410256% {
        opacity: 1;
    }
    42.3076923077% {
        opacity: 1;
    }
    44.8717948718% {
        opacity: 0;
    }
    46.1538461538% {
        opacity: 0;
    }
    48.7179487179% {
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    52.5641025641% {
        opacity: 0;
    }
    53.8461538462% {
        opacity: 0;
    }
    56.4102564103% {
        opacity: 1;
    }
    57.6923076923% {
        opacity: 1;
    }
    60.2564102564% {
        opacity: 0;
    }
    61.5384615385% {
        opacity: 0;
    }
    64.1025641026% {
        opacity: 1;
    }
    65.3846153846% {
        opacity: 1;
    }
    67.9487179487% {
        opacity: 0;
    }
    69.2307692308% {
        opacity: 0;
    }
    71.7948717949% {
        opacity: 1;
    }
    73.0769230769% {
        opacity: 1;
    }
    75.641025641% {
        opacity: 0;
    }
    76.9230769231% {
        opacity: 0;
    }
    79.4871794872% {
        opacity: 1;
    }
    80.7692307692% {
        opacity: 1;
    }
    83.3333333333% {
        opacity: 0;
    }
    84.6153846154% {
        opacity: 0;
    }
    87.1794871795% {
        opacity: 1;
    }
    88.4615384615% {
        opacity: 1;
    }
    91.0256410256% {
        opacity: 0;
    }
    92.3076923077% {
        opacity: 0;
    }
    94.8717948718% {
        opacity: 1;
    }
    96.1538461538% {
        opacity: 1;
    }
    98.7179487179% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
    0% {
        content: "B";
    }
    7.6922076923% {
        content: "B";
    }
    7.6923076923% {
        content: "D";
    }
    15.3845153846% {
        content: "D";
    }
    15.3846153846% {
        content: "F";
    }
    23.0768230769% {
        content: "F";
    }
    23.0769230769% {
        content: "H";
    }
    30.7691307692% {
        content: "H";
    }
    30.7692307692% {
        content: "J";
    }
    38.4614384615% {
        content: "J";
    }
    38.4615384615% {
        content: "L";
    }
    46.1537461538% {
        content: "L";
    }
    46.1538461538% {
        content: "N";
    }
    53.8460538462% {
        content: "N";
    }
    53.8461538462% {
        content: "P";
    }
    61.5383615385% {
        content: "P";
    }
    61.5384615385% {
        content: "R";
    }
    69.2306692308% {
        content: "R";
    }
    69.2307692308% {
        content: "T";
    }
    76.9229769231% {
        content: "T";
    }
    76.9230769231% {
        content: "V";
    }
    84.6152846154% {
        content: "V";
    }
    84.6153846154% {
        content: "X";
    }
    92.3075923077% {
        content: "X";
    }
    92.3076923077% {
        content: "Z";
    }
    99.9999% {
        content: "Z";
    }
}
</style>