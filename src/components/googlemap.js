function GoogleMap() {
    return (
      <div className="map-container w-[850px] h-[300px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.766167161185!2d-122.4194158845729!3d37.77492957975365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1631962225377!5m2!1sen!2sca"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    );
  }

  export default GoogleMap;