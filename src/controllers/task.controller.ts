import { Request, Response } from 'express';
import { taskService, userService } from '../services';
import { SuccessResponse, InternalErrorResponse, NotFoundResponse } from '../helpers/response';
import { MESSAGES } from '../constants';
import logger from '../helpers/logger';
import { mailController } from './mail.controller';

class Controller {
  async create(req: Request, res: Response) {
    req.body.user = res.locals.user._id;
    const data = await taskService.create(req.body);

    if (!data) return InternalErrorResponse(res);

    return SuccessResponse(res, data);
  }

  async getAll(req: Request, res: Response) {
    let pagination = parseInt(req.params.pagination);

    if (!pagination) pagination = 1;

    pagination = (pagination - 1) * 10;

    const data = await taskService.getAll(pagination);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async exists(req: Request, res: Response) {
    const data = await taskService.exists(req.query);

    // If nothing exists, return 0 as the count
    if (!data) return SuccessResponse(res, { data: false });

    return SuccessResponse(res, data);
  }

  async getCount(req: Request, res: Response) {
    const data = await taskService.getCount(req.query);

    // If nothing exists, return 0 as the count
    if (!data) return SuccessResponse(res, { data: 0 });

    return SuccessResponse(res, data);
  }

  async find(req: Request, res: Response) {
    const data = await taskService.find(req.query);

    if (!data) return InternalErrorResponse(res);
    if (data.length === 0) return NotFoundResponse(res);

    return SuccessResponse(res, data);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = await taskService.update({ _id: id }, req.body);

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, MESSAGES.UPDATED);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await taskService.softDelete({ _id: id });

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, MESSAGES.DELETED);
  }

  // Admins only
  async hardDelete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await taskService.hardDelete({ _id: id });

    if (!data) return NotFoundResponse(res);

    return SuccessResponse(res, data, MESSAGES.DELETED);
  }

  // /**
  //  * Helper function to remind reservation holders about upcoming tasks.
  //  *
  //  * @param {number} durationBeforeTaskInHours - Time before task starts, in hours.
  //  */
  // async remindBookers(durationBeforeTaskInHours: number) {
  //   try {
  //     // Get the current time
  //     const currentTime = new Date();

  //     // Calculate the threshold time for tasks to be reminded
  //     const thresholdTime = new Date(
  //       currentTime.getTime() + durationBeforeTaskInHours * 60 * 60 * 1000,
  //     );

  //     // Find tasks that match the criteria (upcoming and active tasks)
  //     const tasks = await taskService.find({
  //       start_time: { $lte: thresholdTime },
  //       status: 'published',
  //     });

  //     // If no matching tasks are found, log and return
  //     if (!tasks || tasks.length === 0) {
  //       logger.info(`No upcoming active tasks found.`);
  //       return;
  //     }

  //     // Iterate through the found tasks
  //     for (const task of tasks) {
  //       // Find all reservations associated with the task
  //       const reservations = await reservationService.find({ task: task._id });

  //       // If no reservations are found, log and return
  //       if (!reservations || reservations.length === 0) {
  //         logger.error(`No reservations found for task: ${task.title}`);
  //         return;
  //       }

  //       for (const reservation of reservations) {
  //         // Find the user associated with the reservation
  //         const user = await userService.findOne({ _id: reservation.user });

  //         // If the user is not found, log and return
  //         if (!user) {
  //           logger.error(`User registered to reservation not found.`);
  //           return;
  //         }

  //         // Send an email reminder to the reservation holder
  //         await mailController.sendTaskReminderMail(
  //           user.email, // recipient's email address
  //           task.title, // task name
  //           task.start_time.toString(), // task date and time
  //           task.location, // task location
  //           user.first_name, // recipient's first name
  //         );

  //         logger.info(
  //           `Task: ${task.title} for ${user.first_name} ${user.last_name}, Reservation ID: ${
  //             reservation.reservation_number
  //           } reminded successfully on ${new Date()}`,
  //         );
  //       }
  //     }
  //   } catch (error: any) {
  //     // Handle any unexpected errors that may occur during the process
  //     logger.error(`Error while sending task reminders: ${error.message}`);
  //   }
  // }

  // /**
  //  * Helper function to check and mark tasks as 'done' when their end_time is passed.
  //  */
  // async setTasksToUnbooked() {
  //   try {
  //     // Get the current time
  //     const currentTime = new Date();

  //     // Find tasks with end_time in the past
  //     const tasksToUpdate = await taskService.find({
  //       end_time: { $lte: currentTime },
  //       status: 'published', // Assuming 'active' tasks need to be marked as 'done'
  //     });

  //     // If no matching tasks are found, log and return
  //     if (!tasksToUpdate || tasksToUpdate.length === 0) {
  //       logger.info(`No tasks with end_time in the past found.`);
  //       return;
  //     }

  //     // Iterate through the found tasks and update their status to 'done'
  //     for (const task of tasksToUpdate) {
  //       task.status = 'done';
  //       await task.save();
  //       logger.info(`Task marked as 'done': ${task.title}`);
  //     }
  //   } catch (error: any) {
  //     // Handle any unexpected errors that may occur during the process
  //     logger.error(`Error while marking tasks as 'done': ${error.message}`);
  //   }
  // }
}

export const taskController = new Controller();
