const db = {
  tracks: ["track 1", "track 2", "track 3"],
};

export const tracksService = new (class {
  getAllTracks() {
    return db.tracks;
  }
})();
