export class UserInfo {
	constructor ({nameValueSelector, jobValueSelector}) {
		 this._nameValue = document.querySelector(nameValueSelector);
		 this._jobValue = document.querySelector(jobValueSelector);
	}
		 
	getUserInfo () {
		 const data = {}
		 data.username = this._nameValue.textContent;
		 data.job = this._jobValue.textContent;
		 return data;
	}

	setUserInfo (data) {
		 this._nameValue.textContent = data.username;
		 this._jobValue.textContent = data.job;
	}
}