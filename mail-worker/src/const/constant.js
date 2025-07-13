const constant = {
	TOKEN_HEADER: 'Authorization',
	JWT_UID: 'user_id:',
	JWT_TOKEN: 'token:',
	TOKEN_EXPIRE: 60 * 60 * 24 * 30,
	ATTACHMENT_PREFIX: 'attachments/',
	BACKGROUND_PREFIX: 'static/background/',
	ADMIN_ROLE: {
		name: '超级管理员',
		sendCount: 0,
		sendType: 'count',
		accountCount: 0
	}
}

export default constant
