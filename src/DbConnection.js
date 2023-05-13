
function DbConnection() {
  return {
    connect: () => {
      console.log("Db CONNECTION OPENED");
    },
    disconnect: () => {
      console.log("DB CONNECTION CLOSED");
    },
  };
}

export default DbConnection;
