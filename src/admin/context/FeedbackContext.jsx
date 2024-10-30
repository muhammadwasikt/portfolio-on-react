import { createContext, useEffect, useState } from "react";
import { collection, db, getDocs } from "../../../firebase";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedData, setFeedData] = useState(null);

    const querySnapshot = async () => {
        try {
            const userData = await getDocs(collection(db, "feedback"));
            const feedbacks = [];
            userData.forEach((doc) => {
                feedbacks.push({ id: doc.id, ...doc.data() });
            });
            setFeedData(feedbacks);
            
        } catch (error) {
            console.error("Error fetching feedback data: ", error);
        }
    };
    
    useEffect(() => {
        querySnapshot();
    }, []);

    return (
        <FeedbackContext.Provider value={{ feedData }}>
            {children}
        </FeedbackContext.Provider>
    );
};
