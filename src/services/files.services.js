import Api from "./api.service";


export const filesServices = {

    makeFolder(name) {
        return Api
            .post('/files/files-explore/make-folder', {
                name
            });
    }
};