const Tour = require("./../models/tourModel");

exports.getAllTours = async (req, res) => {
  const tours = await Tour.find();

  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findById(id);

    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: `Can not find tour with id ${req.params.id}`,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const id = req.params.id;

    const updateTour = await Tour.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      status: "success",
      data: {
        tour: updateTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: `Can not find tour with id ${req.params.id}`,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const id = req.params.id;

    await Tour.findByIdAndRemove(id);

    res.status(204).json({
      status: "success",
      data: "Delete tour has successful",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: `Can not find tour with id ${req.params.id}`,
    });
  }
};
