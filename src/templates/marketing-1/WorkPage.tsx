import { MarketingData } from "@/features/common/interface";
import ProjectCard from "@/features/home/marketing/ProjectCard";
import WorkFilter from "@/features/work/marketing/WorkFilter";

type Props = {
    data: MarketingData;
};

export default function Marketing1WorkPage(props: Props) {
    const { data } = props;
    const { projects } = data;
    return (
        <div className="max-w-screen-xxl mx-auto px-24 pb-24 pt-8 max-lg:px-5">
            <WorkFilter />
            <div className="gap-10 flex flex-col">
                {projects?.map((item) => <ProjectCard key={item.id} item={item} />)}
            </div>
        </div>
    );
}
