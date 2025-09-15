import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ServiceBreadcrumbProps {
  serviceName?: string;
  neighborhoodName?: string;
  isHomePage?: boolean;
}

export const ServiceBreadcrumb = ({ 
  serviceName, 
  neighborhoodName, 
  isHomePage = false 
}: ServiceBreadcrumbProps) => {
  if (isHomePage) return null;

  return (
    <div className="container mx-auto px-4 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Início</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {serviceName && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {neighborhoodName ? (
                  <BreadcrumbLink asChild>
                    <Link to={`/${serviceName.toLowerCase()}`}>{serviceName}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{serviceName}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </>
          )}
          {neighborhoodName && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{neighborhoodName}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};