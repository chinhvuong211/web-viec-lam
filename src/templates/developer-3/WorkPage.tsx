import ProjectList from '@/features/work/components/ProjectList';
import ProjectListPagination from '@/features/work/components/ProjectListPagination';
import WorkFilter from '@/features/work/components/WorkFilter';

import Developer3Footer from './components/Footer';
import Developer3Header from './components/Header';

export default function WorkPage() {
    return (
        <div>
            <div className="bg-theme-background">
                <Developer3Header />

                <div className="pt-[11.375rem] max-lg:pt-24 max-w-screen-xxl mx-auto">
                    <h1 className="text-style-1 px-24 text-title-h2 max-lg:px-5 max-lg:text-md-title-h1">
                        MY PROJECTS
                    </h1>
                </div>

                <div className="p-24 max-lg:px-5 max-lg:py-10 max-w-screen-xxl mx-auto">
                    <WorkFilter />
                    <ProjectList />
                    <ProjectListPagination />
                </div>
            </div>
            <Developer3Footer />
        </div>
    );
}
