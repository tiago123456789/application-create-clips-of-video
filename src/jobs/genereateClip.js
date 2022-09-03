const { execSync } = require("child_process")
const path = require("path")
const Queue = require("bull")
const { transformHourMinuteSecondToSecond } = require("../utils/time")

const clipQueue = new Queue("clips_to_process")
clipQueue.process((job, done) => {
    const data = job.data
    console.log("Starting to process to create clip")
    const startTimeInSeconds = transformHourMinuteSecondToSecond(
        data.start
    );

    const input = data.input;
    const duration = data.duration;
    const outputClip = path.resolve(__dirname, "..", "..", "storage", "clips", data.output)

    const command = `ffmpeg -ss ${startTimeInSeconds} -i ${input} -t ${duration} -c copy ${outputClip}`
    const output = execSync(command)
    console.log(output.toString());
    console.log("Finished to process to create clip")
    done();
})