import {extendObservable, action} from 'mobx';

function StatusStore() {
    extendObservable(this, {
        getCounter: true,
        goToModify: action.bound(function () {
            this.getCounter = false;
            console.log('StatusStore', this.getCounter);
        })
    })
}

export default StatusStore;