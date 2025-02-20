import {
  makeObservable,
  observable,
  computed,
  action,
  autorun,
  runInAction,
} from "mobx";

class UserStore {
  userInfo = {
    id: "CS117",
    name: "Code",
    subject: ["MATH", "ENGLISH", "HINDI"],
  };

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      totalSubject: computed,
      updateUser: action,
      addSubject: action,
    });

    autorun(this.logUserDetails);
    runInAction(() => this.prefetchData());
  }

  get totalSubject() {
    console.log("getter");
    return this.userInfo.subject.length;
  }

  logUserDetails = () => {
    console.log("Subject length " + this.totalSubject);
  };

  updateUser = (name) => {
    this.userInfo.name = name;
  };

  prefetchData = () => {
    console.log("prefetchData");
  };

  addSubject = (data) => {
    return "NA";
  };
}

export default UserStore;
