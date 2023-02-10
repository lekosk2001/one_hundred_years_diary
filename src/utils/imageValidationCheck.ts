import { Modal } from "antd";

export const imageValidationCheck = (file: File) => {
    if (
        !file.type.includes('jpg')
        && !file.type.includes('png')
        && !file.type.includes('jpeg')
        && !file.type.includes('gif')
    ) { Modal.error({ content: "jpg, png, jpeg, gif 형식만 업로드 할 수 있습니다." }); return false; }

    return true;
}