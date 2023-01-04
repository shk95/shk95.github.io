// https://vuejs.org/v2/guide/custom-directive.html
// 'v-focus' 라는  전역 사용자 정의 지시자 등록하기
Vue.directive('focus', {
    // 요소가 DOM 으로 삽입될때
    inserted: function (el) {
        el.focus();
    }
});