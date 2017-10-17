module.exports = {
    get MineScreen() {
        return require('./MineScreen').default
    },
    get ChatScreen(){
        return require('./ChatScreen').default
    },
    get DynamicScreen() {
        return require('./DynamicScreen').default
    },
    get InterestScreen() {
        return require('./InterestScreen').default
    },
    get MeetScreen(){
        return require('./MeetScreen').default
    }
}