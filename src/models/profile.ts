import {Post, PostFb} from "./post";

export interface ProfileFb {
    id: string;
    employeeId: string;
    name: string;
    mobile: string;
    bloodGroup: string,
    telephone: string,
    email: string;
    presentAddress: string,
    post: PostFb,
    additionalPost?: PostFb
}

export class Profile {
    private _id: string;
    private _employeeId?: string;
    private _name: string;
    private _mobile: string;

    private _post: Post;
    private _additionalPost?: Post;

    private _bloodGroup?: string;

    private _telephone?: string;
    private _email: string;

    private _presentAddress: string;


    get name(): string {
        return this._name;
    }


    get post(): Post {
        return this._post;
    }

    set id(value: string) {
        this._id = value;
    }

    set employeeId(value: string) {
        this._employeeId = value;
    }

    set name(value: string) {
        this._name = value;
    }

    set mobile(value: string) {
        this._mobile = value;
    }

    set post(value: Post) {
        this._post = value;
    }

    set additionalPost(value: Post) {
        this._additionalPost = value;
    }

    set bloodGroup(value: string) {
        this._bloodGroup = value;
    }

    set telephone(value: string) {
        this._telephone = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set presentAddress(value: string) {
        this._presentAddress = value;
    }
}

