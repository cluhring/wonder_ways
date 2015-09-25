module ApplicationHelper
  def ready_to_go?
    Trail.count > 18000
  end
end
