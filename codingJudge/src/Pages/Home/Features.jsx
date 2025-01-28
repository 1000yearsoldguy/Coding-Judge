// Import necessary dependencies
import Container from "../../Layout/Container"; // Layout component for consistent page structure

const Features = () => {
  return (
    <div id="flow" className="bg-white pt-20"> {/* Outer container for the features section */}
      <Container> {/* Wrap the content inside a layout container */}
        {/* Section for Features header */}
        <div className="text-center mb-10 space-y-4">
          <p className="tracking-widest font-bold text-secondary-color">
            OUR FEATURES
          </p>
          <h2 className="text-4xl text-active-color font-semibold capitalize">
            What we provide
          </h2>
        </div>

        {/* Grid layout for displaying features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Individual feature item */}
          <div className="flex h-48">
            <div className="block max-w-sm p-6 bg-secondary-color rounded-lg shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Collection of Contests
              </h5>
              <p className="font-normal text-gray-300">
                There is a lot of programming contests for students to enhance
                their skills, creativity, and problem-solving ideas.
              </p>
            </div>
          </div>

          {/* Second feature item */}
          <div className="flex h-48">
            <div className="block max-w-sm p-6 bg-secondary-color rounded-lg shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Deadline Management
              </h5>
              <p className="font-normal text-gray-300">
                Emphasize the automatic deadline notifications and reminders
                that help users stay organized and on track.
              </p>
            </div>
          </div>

          {/* Third feature item */}
          <div className="flex h-48">
            <div className="block max-w-sm p-6 bg-secondary-color rounded-lg shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Submission Tracking
              </h5>
              <p className="font-normal text-gray-300">
                Showcase the feature that allows students to submit their
                code online and track their submission history.
              </p>
            </div>
          </div>

          {/* Fourth feature item */}
          <div className="flex h-48">
            <div className="block max-w-sm p-6 bg-secondary-color rounded-lg shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Grading and Feedback
              </h5>
              <p className="font-normal text-gray-300">
                Feature the grading system that enables teachers to efficiently
                assess and provide feedback on each contest.
              </p>
            </div>
          </div>

          {/* Fifth feature item */}
          <div className="flex h-48">
            <div className="block max-w-sm p-6 bg-secondary-color rounded-lg shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Leaderboard
              </h5>
              <p className="font-normal text-gray-300">
                See your appearance on the leaderboard by finishing contests properly and on time.
              </p>
            </div>
          </div>

          {/* Sixth feature item */}
          <div className="flex h-48">
            <div className="block max-w-sm p-6 bg-secondary-color rounded-lg shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Role-Based Access
              </h5>
              <p className="font-normal text-gray-300">
                Explain how the role-based access control ensures that each user
                sees what&#39;s relevant to them.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
