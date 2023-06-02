class NewAddedTicket {
  constructor(payload) {
    this._verifyPayload(payload);
    const {
      _id, title, description, createdBy, createdAt, status,
    } = payload;
    this._id = _id;
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.status = status;
  }

  _verifyPayload(payload) {
    const {
      _id, title, description, createdBy, createdAt, status,
    } = payload;

    if (!_id || !title || !description || !createdBy || !createdAt || !status) {
      throw new Error('NEW_ADDED_TICKET.NOT_COUNTAIN_NEEDED_PROPERTY');
    }

    if (typeof _id !== 'string' || typeof title !== 'string' || typeof description !== 'string' || typeof createdBy !== 'string' || typeof createdAt !== 'string' || typeof status !== 'string') {
      throw new Error('NEW_ADDED_THREAD.PAYLOAD_NOT_MEET_DATA_TYPE_SPESIFICATION');
    }
  }
}

module.exports = NewAddedTicket;