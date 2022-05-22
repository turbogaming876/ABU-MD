// Copyright (C) 2020 Afx-Abu //
class MissingAdapterError extends Error {
    constructor() {
        super();
        this.message = 'Missing Adapter';
    }
}
module.exports = { MissingAdapterError };
