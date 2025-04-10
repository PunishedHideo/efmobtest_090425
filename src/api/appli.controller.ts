import { Request, Response } from 'express'; // types
import { createApplicationService, workApplicationService, completeApplicationService, rejectApplicationService, getApplicationService, rejectInWorkApplicationService } from './appli.service';

export const applicationCreate = async (req: Request, res: Response) => {
    try {
    // body must contain topic and text
    if (!req.body) {
        res.status(400).send('Request must contain a body with "topic" and "text" properties');
    } else {
        if (!req.body.topic || !req.body.text) {
            res.status(400).send('Request body does not contain "topic" and/or "text" properties');
        } else {
            res.status(200).send(`Request for creating new application has been created`)
            await createApplicationService(req.body.topic, req.body.text)
            // additional error handling could be added
        }
    }
} catch(err) {
    res.status(500).send('Serverside error. Please retry the request')
}
}

export const applicationWork = async (req: Request, res: Response) => {
    try {
    if (!req.body) {
        res.status(400).send("Request body must contain an application's unique 'insertedId'");
    } else {
        if (!req.body.insertedId) {
            res.status(400).send("Request body does not contain an application's unique 'insertedId'");
        } else {
            res.status(200).send(`Request for changing ${req.body.insertedId} status has been created`)
            await workApplicationService(req.body.insertedId)
            // additional error handling could be added
        }
    }
} catch(err) {
    res.status(500).send('Serverside error. Please retry the request')
}
}

export const applicationComplete = async (req: Request, res: Response) => {
    try {
    if (!req.body) {
        res.status(400).send("Request body must contain an application's unique 'insertedId' and 'replyText'");
    } else {
        if (!req.body.insertedId && !req.body.replyText) {
            res.status(400).send("Request body does not contain an application's unique 'insertedId' and/or 'replyText'");
        } else {
            const result = await completeApplicationService(req.body.insertedId, req.body.replyText)
            res.status(200).send(`${result.replyText}`)
            // additional error handling could be added
        }
    }
} catch(err) {
    res.status(500).send('Serverside error. Please retry the request')
}
}

export const applicationReject = async (req: Request, res: Response) => {
    try {
    if (!req.body) {
        res.status(400).send("Request body must contain an application's unique 'insertedId' and 'replyText'");
    } else {
        if (!req.body.insertedId && !req.body.replyText) {
            res.status(400).send("Request body does not contain an application's unique 'insertedId' and/or 'replyText'");
        } else {
            const result = await rejectApplicationService(req.body.insertedId, req.body.replyText)
            res.status(200).send(`${result.replyText}`)
            // additional error handling could be added
        }
    }
} catch(err) {
    res.status(500).send('Serverside error. Please retry the request')
}
}

export const applicationGet = async (req: Request, res: Response) => {
    try {
    if (!req.query) {
        res.status(400).send("Request query must contain 'insertedId' or 'time' or 'timeFrom' and 'timeTo'")
    } else {
        if (req.query.time && !req.query.timeFrom && !req.query.timeTo && !req.query.insertedId) {
            const data = {
                time: req.query.time
            }

        const result = await getApplicationService(data)
        res.status(200).send(JSON.stringify(result))
        // additional error handling could be added
    } else if (!req.query.time && req.query.timeFrom && req.query.timeTo && !req.query.insertedId) {
        const data = {
            timeFrom: req.query.timeFrom,
            timeTo: req.query.timeTo
        }

        const result = await getApplicationService(data)
        res.status(200).send(JSON.stringify(result))
        // additional error handling could be added
    } else if (!req.query.time && !req.query.timeFrom && !req.query.timeTo && req.query.insertedId) {
        const data = {
            insertedId: req.query.insertedId
        }

        const result = await getApplicationService(data)
        res.status(200).send(JSON.stringify(result))
        // additional error handling could be added
    } else {
        res.status(400).send("Something is wrong. Request query must contain 'insertedId' or 'time' or 'timeFrom' and 'timeTo'")
    }
}
} catch(err) {
    res.status(500).send('Serverside error. Please retry the request')
}
}

export const applicationRejectInWork = async (req: Request, res: Response) => {
    try {
    if (!req.body) {
        res.status(400).send("Request body must contain 'rejectionReason'");
    } else {
        if (!req.body.rejectionReason) {
            res.status(400).send("Request body does not contain a 'rejectionReason'");
        } else {
            const result = await rejectInWorkApplicationService(req.body.rejectionReason)
            res.status(200).send(`All applications in work are rejected`)
            // additional error handling could be added
        }
    }
} catch(err) {
    res.status(500).send('Serverside error. Please retry the request')
}
}
