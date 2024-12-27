import { Feedback } from "@/models/feedback.model";
import { User } from "@/models/user.model";

class feedbackService
{

    async newFeedback(user, rating, comment)
    {
        try
        {
            const feedback = await Feedback.create({user, rating, comment})
            await feedback.save();
            return feedback;
        }
        catch(error)
        {
            throw error
        }
    }

    async getAllFeedbacks()
    {
        try
        {
            const feedbacks = await Feedback.find({}).populate({ path: 'user', model: User }) 
            return feedbacks
        }
        catch(error)
        {
            throw error
        }
    }
}

export default feedbackService