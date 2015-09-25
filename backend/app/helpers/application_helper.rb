module ApplicationHelper
  def ready_to_go?
    Trail.count > 14900
  end
end
