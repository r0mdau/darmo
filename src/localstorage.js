'use strict';

function Storage(){
    this.keys = {
        nick : 'nick'
    };
}

Storage.prototype.getNick = function() {
    return JSON.parse(localStorage.getItem(this.keys.nick) || '[]');
};

Storage.prototype.setNick = function() {
    localStorage.setItem(keys.token, JSON.stringify(token));
};