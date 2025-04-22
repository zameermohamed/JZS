import { Request, Response, NextFunction } from "express";
import { ExampleParams, ExampleReqBody } from "../types/paramsTypes.js";
import { ExampleModel, Example } from "../models/example.js";
import { OneDocumentResponse, PostResponce } from "../types/responsesTypes.js";
import { DatabaseError, reqError } from "../types/errorTypes.js";

const getExampleByIdController = async (
  req: Request<ExampleParams, {}, {}, {}>,
  res: Response<OneDocumentResponse<Example>>,
  next: NextFunction
) => {
  try {
    const params: number = Number(req.params.id);

    const exampleDoc: Example | null = await ExampleModel.findOne({
      secondProperty: params,
    });

    if (!exampleDoc) {
      throw new DatabaseError("Could not find the correct doument", 404);
    }

    res.status(200).json({ document: exampleDoc });
  } catch (error) {
    next(error);
  }
};

const postExample = async (
  req: Request<{}, {}, ExampleReqBody, {}>,
  res: Response<PostResponce<Example>>,
  next: NextFunction
) => {
  try {
    if (
      !req.body.firstProperty ||
      !req.body.secondProperty ||
      !req.body.thirdProperty
    ) {
      throw new reqError("req body missing properties", 400);
    }
    const body_1: string = req.body.firstProperty;
    const body_2: Number = Number(req.body.secondProperty);
    const body_3: String = req.body.thirdProperty;

    if (await ExampleModel.findOne({ secondProperty: body_2 })) {
      throw new reqError("Property id all ready exists", 409);
    }

    await ExampleModel.create({
      firstProperty: body_1,
      secondProperty: body_2,
      thirdProperty: body_3,
    });

    const result_all = await ExampleModel.find();

    res.status(201).json({ msg: "success", examples: result_all });
  } catch (error) {
    next(error);
  }
};

export { getExampleByIdController, postExample };
