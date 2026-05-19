import React from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar,
  CreditCard,
  Award,
  Clock,
  Users,
  BookOpen,
  Bell,
  Video,
} from "lucide-react";

const ENROLL_URL = "https://forms.gle/gDvnNA5KD7V5cdVQ8";

export default function CourseDetailsModal({ isOpen, onClose, course }) {
  const { t } = useTranslation();

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      window.lenis?.stop();
    } else {
      document.body.classList.remove("overflow-hidden");
      window.lenis?.start();
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.lenis?.start();
    };
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        data-lenis-prevent
        className="bg-gray-950/95 backdrop-blur-2xl border border-gray-800 text-white rounded-[32px] p-6 md:p-8 max-w-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-y-auto max-h-[90vh] outline-none"
      >
        {course && (
          <div className="space-y-6">
            <DialogHeader className="text-left">
              <DialogTitle className="text-3xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent flex items-center gap-3 tracking-wide">
                <span
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-2xl text-white shadow-lg`}
                >
                  {course.icon}
                </span>
                {course.classLabel}
              </DialogTitle>

              <DialogDescription className="text-gray-200 text-base font-medium italic mt-4 leading-relaxed border-l-4 border-yellow-400 pl-4 bg-gray-900/40 py-3 rounded-r-xl">
                “{course.intro}”
              </DialogDescription>
            </DialogHeader>

            {/* Course Details Block */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-yellow-400 flex items-center gap-2 border-b border-gray-800 pb-3">
                <Award className="w-5 h-5 text-yellow-400" />
                {t("Course Details")}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Schedule */}
                <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-2xl border border-gray-800/60 hover:bg-gray-900/80 transition-colors duration-200">
                  <Calendar className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">
                      Schedule
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {t("Class Schedule")}
                    </p>
                  </div>
                </div>

                {/* Fee */}
                <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-2xl border border-gray-800/60 hover:bg-gray-900/80 transition-colors duration-200">
                  <CreditCard className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">
                      Fee
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {t("Fee")}
                    </p>
                  </div>
                </div>

                {/* Incentive */}
                <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-2xl border border-gray-800/60 hover:bg-gray-900/80 transition-colors duration-200">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">
                      Incentive
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {t("Incentive")}
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-2xl border border-gray-800/60 hover:bg-gray-900/80 transition-colors duration-200">
                  <Clock className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">
                      Duration
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {t("Class Duration")}
                    </p>
                  </div>
                </div>

                {/* Size */}
                <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-2xl border border-gray-800/60 hover:bg-gray-900/80 transition-colors duration-200">
                  <Users className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">
                      Class Size
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {t("Class Size")}
                    </p>
                  </div>
                </div>

                {/* Structure */}
                <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-2xl border border-gray-800/60 hover:bg-gray-900/80 transition-colors duration-200">
                  <BookOpen className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">
                      Structure
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {t("Class Structure")}
                    </p>
                  </div>
                </div>

                {/* Update */}
                <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-2xl border border-gray-800/60 hover:bg-gray-900/80 transition-colors duration-200">
                  <Bell className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">
                      Parent Updates
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {t("Parent Updates")}
                    </p>
                  </div>
                </div>

                {/* Camera */}
                <div className="flex items-start gap-3 p-3 bg-gray-900/50 rounded-2xl border border-gray-800/60 hover:bg-gray-900/80 transition-colors duration-200">
                  <Video className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">
                      Camera Rule
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {t("Camera Rule")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Action Bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-800 pt-6">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Monthly Investment
                </p>
                <p className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  ৳ 2,000 / month
                </p>
              </div>

              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r ${course.gradient} text-white font-extrabold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transform transition-all duration-300 hover:scale-105 text-sm text-center flex items-center justify-center gap-2`}
              >
                {t("Enroll Now")} →
              </a>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
