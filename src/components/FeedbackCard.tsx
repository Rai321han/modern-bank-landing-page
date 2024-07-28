import { quotes } from "../assets";

type FeedbackCardPropsType = {
  content: string;
  name: string;
  title: string;
  img: string;
};

export default function FeedbackCard({
  content,
  name,
  title,
  img,
}: FeedbackCardPropsType) {
  return (
    <div className="flex justify-between flex-col px-10 sm:py-12 py-8 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-2 mr-0  sm:my-5 my-2 feedback-card">
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[32px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
