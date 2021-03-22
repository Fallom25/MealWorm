import FeedbackPanel from "../feedback";

const NotFound = () => {
    return (
        <FeedbackPanel 
            title={"Page Not Found"}
            header={"The Page you have requested does not exist"}
        />)
}

export default NotFound;