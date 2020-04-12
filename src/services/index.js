const ROOT_HOST_NAME = "http://3.85.8.66";

export const AppService = {
    getList: async function () {
        return await fetch(`${ROOT_HOST_NAME}/api/v1/core/packages/`, {
            "method": "GET",
            "headers": {
                "accept": "application/json"
            }
        });
    },

    getAppDetail: async function(package_name) {
        return await fetch(`${ROOT_HOST_NAME}/api/v1/core/packages/?package_name=${package_name}`, {
            "method": "GET",
            "headers": {
                "accept": "application/json"
            }
        });
    },

    scrapApps: async function () {
        return await fetch(`${ROOT_HOST_NAME}/api/v1/core/scrap_status/`, {
            "method": "POST",
            "headers": {
                "accept": "application/json"
            }
        });
    },

    checkScrapingStatus: async function () {
        return await fetch(`${ROOT_HOST_NAME}/api/v1/core/scrap_status/`, {
            "method": "GET",
            "headers": {
                "accept": "application/json"
            }
        });
    },
};
