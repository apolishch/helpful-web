angular.module('helpful', ['helpful.shared', 'helpful.signUp'])
    .config(["$httpProvider", function(provider){
      provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
      provider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }]);
