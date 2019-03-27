package lc.platform.admin.modules.sys.service.impl;

import lc.platform.admin.common.utils.PageUtils;
import lc.platform.admin.common.utils.Query;
import lc.platform.admin.common.utils.UtilValidate;
import lc.platform.admin.modules.sys.dao.SysBookDao;
import lc.platform.admin.modules.sys.entity.SysBookEntity;
import lc.platform.admin.modules.sys.service.SysBookService;
import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;


@Service("sysBookService")
public class SysBookServiceImpl extends ServiceImpl<SysBookDao, SysBookEntity> implements SysBookService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        EntityWrapper<SysBookEntity> ew =new EntityWrapper<SysBookEntity>();

        if(UtilValidate.isNotEmpty(params.get("userId"))){
            String userId=String.valueOf(params.get("userId"));
            ew.eq("book_person_id",userId);
        }
        Page<SysBookEntity> page = this.selectPage(
                new Query<SysBookEntity>(params).getPage(),ew
        );

        return new PageUtils(page);
    }

}
