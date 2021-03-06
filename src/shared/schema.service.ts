import { Injectable } from '@angular/core';

@Injectable()
export class SchemaService {
    private _verse = "verse";
    private _bookmark = "bookmark";
    private _metadata = "metadata";
    private _setting = "setting";

    schema = {
        stores: [
            {
                name: this._verse,
                keyPath: 'index'
            },
            {
                name: this._bookmark,
                keyPath: 'key'
            },
            {
                name: this._metadata,
                keyPath: 'key'
            },
            {
                name: this._setting,
                keyPath: 'key'
            }
        ]
    };
    tables = {
        verse: this._verse,
        metadata: this._metadata,
        bookmark: this._bookmark,
        setting: this._setting
    };

    constructor() {

    }
}